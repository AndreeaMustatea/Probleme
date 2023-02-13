import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ AuthService} from './../../_core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  displayError!:boolean;


  constructor(private formBuilder : FormBuilder, 
              private authService: AuthService,
              private router: Router ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm():void
  {const rememberMe=localStorage.getItem('rememberMe');
  if (rememberMe) {
    this.loginForm = new FormGroup({
      email: new FormControl(JSON.parse(rememberMe).email, [Validators.required, Validators.email]),
      password: new FormControl(JSON.parse(rememberMe).password, [Validators.required]),
      rememberMe: new FormControl(JSON.parse(rememberMe).rememberMe)
    });
  } else {
    this.loginForm=this.formBuilder.group({
        email: [null, [Validators.email, Validators.required]],
        password:[null,[Validators.required,Validators.minLength(6)]],
        rememberMe:[false]
      });
  }

  }

  login():void{
    if(this.loginForm.invalid)
    {
      return;
    }
    if(this.loginForm.value.rememberMe){
      localStorage.setItem('rememberMe', JSON.stringify(this.loginForm.value));
    } else {
      localStorage.removeItem('rememberMe');  
    }
    const payLoad={email:this.email.value, password:this.password.value};

    this.authService.login(payLoad).subscribe({
      next :(response)=>{
        window.localStorage["token"]=response.token;
        this.router.navigate(['dashboard']);
        console.log(response);
        
        
        
      },
      error : ()=>{
        this.displayError=true;
      }
    })
  }
  get email() : FormControl{
    return this.loginForm.get("email") as FormControl;
  }

  get password() : FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  
  

}