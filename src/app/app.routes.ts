import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClassComponent } from './pages/class/class.component';
import { LevelComponent } from './pages/level/level.component';
import { ChatComponent } from './pages/chat/chat.component';


export const routes: Routes = [
    { path: 'class', component: ClassComponent },
    { path: 'level', component: LevelComponent },
    { path: 'chat', component: ChatComponent },
    { path: '', redirectTo: '/class', pathMatch: 'full' },  // Default route
    { path: '**', redirectTo: '/class', pathMatch: 'full' } 
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }