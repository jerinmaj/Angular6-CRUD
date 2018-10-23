import { Injectable } from '@angular/core';

@Injectable()

export class GlobalProvider {
                        isGuest = true;
                        currentPage='login';
                        API_ENDPOINT="";  
                        username="";
                        constructor()
                         {    }
                    }