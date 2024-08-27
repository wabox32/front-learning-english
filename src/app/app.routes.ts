import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClassComponent } from './pages/class/class.component';
import { LevelComponent } from './pages/level/level.component';
import { ChatComponent } from './pages/chat/chat.component';


export const routes: Routes = [
    { path: 'class/:id', component: ClassComponent },
    { path: 'level', component: LevelComponent },
    { path: 'chat/:id', component: ChatComponent },
    { path: '', redirectTo: '/level', pathMatch: 'full' },  // Default route
    { path: '**', redirectTo: '/level', pathMatch: 'full' } 
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }