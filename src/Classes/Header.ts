export class Header{
    constructor(siteName = '...'){
        this._siteName=siteName;
        this._navItems=[
            {
                label:'Home',
                href:'/'
            },
            {
                label:'About',
                href:'/about'
            },
            {
                label:'Work',
                href:'/work'
            },
            {
                label:'Contact',
                href:'/contact'
            },
            {
                label:'Blog',
                href:'/blog'
            },
        ]
    }

    private _siteName:string;
    private _navItems:{label:string; href:string}[];

    getSiteName(){
        return this._siteName;
    }

    getNavItems(){
        return this._navItems;
    }

}