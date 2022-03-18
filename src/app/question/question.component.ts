import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public questionList: any = [];
  public currentQuestion:number = 0;
  public points:number=0;
  public correctAnswer:number = 0;
  public incorrectAnswer:number = 0;
  quizCompleted:boolean = false;
  public name:string ="";


  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.name=localStorage.getItem("name")!;
  }

  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res => {
      this.questionList=res;
    })
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }

  answer(currentQno:number,option:any){
    if(currentQno===this.questionList.length){
      this.quizCompleted=true;
    }

    if(option.correct){
      this.points+=10;
      this.correctAnswer++;
      this.currentQuestion++;
    }else{
      this.points-=10;
      this.incorrectAnswer++;
      this.currentQuestion++;
    } 
  }
}
