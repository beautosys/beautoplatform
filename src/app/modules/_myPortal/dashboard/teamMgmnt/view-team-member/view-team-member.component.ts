import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { DeleteTeamMemberComponent } from '../delete-team-member/delete-team-member.component';
import { TeamComponent } from '../team/team.component';
import { Teammember } from '../_model/team-memeber';
import { TeamCrudOpeService } from '../_service/team-crud-ope.service';

@Component({
  selector: 'app-view-team-member',
  templateUrl: './view-team-member.component.html',
  styleUrls: ['./view-team-member.component.scss']
})
export class ViewTeamMemberComponent implements OnInit {
  [x: string]: any;

  teamMemberData: Teammember[] = []
  columnsToDisplay: any[] = ['name', 'designation', 'department', 'linkdinUrl', 'info', 'state',];
  dataSource: any;
  dataid: any;

  @ViewChild(MatPaginator, { static: false }) set paginator(
    value: MatPaginator
  ) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }
  constructor(private headerTitleService: HeaderTitleService,
    private activatedRoute: ActivatedRoute, private teammemberService: TeamCrudOpeService,
    private router: Router, private dialog: MatDialog) {
    this.activatedRoute.params.subscribe((params) => {
      this.dataid = params["empidID"];

    });
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.loadTeamMember();


  }

  loadTeamMember() {
    this.teammemberService.getTeamMembers().subscribe(
      (response: Teammember[]) => {

        this.dataSource = response
      }
    );
  }

  goToDeleteTeammenever(event: any) {

    const dialogRef = this.dialog.open(DeleteTeamMemberComponent, {

      data: {
        message: `Are you sure want to delete role `,
        event: event,
        buttonText: {
          ok: 'Remove role',
          cancel: 'Cancel'
        }
      }
    });


    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.teammemberService.deleteTeamMember(event).subscribe((res: any) => {

          this.loadTeamMember();

        })
      }
    });
  }

  goToEditTeammenever(row: any) {

    this.slectedData = row;

    this.router.navigate([`dashboard/websAdmin/editTeam/${this.slectedData.empidID}`]);
    // this.router.navigate(['dashboard/websAdmin/editTeam'])
  }
  goToAddTeamMember() {
    const dialogRef = this.dialog.open(TeamComponent, {
      width: '50vw',
      maxWidth: '50vw',

    });
    dialogRef.afterClosed().subscribe(() => {
      this.selection.clear();
      setTimeout(() => {
        this.loadTeamMember();
      }, 500);

    });
  }
}
