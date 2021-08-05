import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { FbAccount } from '../_models';
import { AccountService } from '../_services';



@Component({ templateUrl: 'home.component.html' })


export class HomeComponent {
    accounts: any[];

    constructor(private accountService: AccountService) { }

    fbAccounts: FbAccount[] = []


    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(accounts => this.accounts = accounts);

        this.accountService.getFbAccounts().subscribe(resp => {


            this.fbAccounts = resp.data;
        })

        setTimeout(() => {

            // this.accountService.getAllPost().subscribe(resp => console.log(resp))
        }, 1000);

    }

    deleteAccount(id: string) {
        const account = this.accounts.find(x => x.id === id);
        account.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.accounts = this.accounts.filter(x => x.id !== id));
    }


    getFbAccount(id) {
            this.accountService.getById(id).subscribe(resp => console.log(resp))

    }


    getPosts(fbId: string) {
        this.accountService.getAllPost(fbId).subscribe(resp => {

            console.log(resp);
        })
    }



}