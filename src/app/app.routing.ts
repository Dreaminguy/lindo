import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'app/main/main.component';
import { GeneralComponent } from 'app/window/option/general/general.component';
import { NotificationComponent } from 'app/window/option/notification/notification.component';
import { AutoGroupComponent } from 'app/window/option/vip/auto-group/auto-group.component';
import { GeneralComponent as VipGeneralComponent } from 'app/window/option/vip/general/general.component';
import { MultiAccountComponent } from 'app/window/option/vip/multi-account/multi-account.component';
import { VipComponent } from 'app/window/option/vip/vip.component';

import { ShortcutsOtherComponent } from "app/window/shortcuts/other/other.component";
import { ShortcutsApplicationComponent } from "app/window/shortcuts/application/application.component";
import { ShortcutsInventoryComponent } from "app/window/shortcuts/inventory/inventory.component";
import { ShortcutsInterfaceComponent } from "app/window/shortcuts/interface/interface.component";
import { ShortcutsSpellComponent } from "app/window/shortcuts/spell/spell.component";
import { GameUpdateComponent } from "app/window/game-update/game-update.component";
import { AboutComponent } from "app/window/option/about/about.component";

const appRoutes: Routes = [
    {
        path: '', component: MainComponent
    },
    {
        path: 'option',
        children: [
            { path: 'general', component: GeneralComponent },
            {
                path: 'features',
                component: VipComponent,
                children: [
                    { path: 'general', component: VipGeneralComponent, outlet: 'featuresOutlet' },
                    { path: 'groups', component: AutoGroupComponent, outlet: 'featuresOutlet' },
                    { path: 'accounts', component: MultiAccountComponent, outlet: 'featuresOutlet' }
                ]
            },
            { path: 'notification', component: NotificationComponent },
            { path: 'about', component: AboutComponent }
        ]
    },
    {
        path: 'shortcuts',
        children: [
            { path: 'application', component: ShortcutsApplicationComponent },
            { path: 'interface', component: ShortcutsInterfaceComponent },
            { path: 'spell', component: ShortcutsSpellComponent },
            { path: 'inventory', component: ShortcutsInventoryComponent },
            { path: 'other', component: ShortcutsOtherComponent }
        ]
    },
    {
        path: 'game-update',
        children: [
            { path: ':savePath/:remoteUrl', component: GameUpdateComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }