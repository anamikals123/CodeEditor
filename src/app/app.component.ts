import { Component } from '@angular/core';
type Language = 'python' | 'c' | 'java'|'cpp'|'csharp'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  
  languages = [
    { value: 'python', label: 'Python' },
    { value: 'c', label: 'C' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'csharp', label: 'C#' }, 
    
  ];

  themes = [
    { value: 'vs-dark', label: 'Dark' },
    { value: 'vs-light', label: 'Light' },
  ];

  selectedLanguage :Language = 'python'; 
  selectedTheme: string = 'vs-dark';

 editorOptions = {theme: this.selectedTheme, language: this.selectedLanguage,};
 code: string = '';

  defaultCode = {   
    python: `def say_hello():
      print("Hello, Python!")`,
    java: `public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, Java!");
      }
  }`,
    c: `#include <stdio.h>
  
  int main() {
      printf("Hello, C!");
      return 0;
  }`,
    cpp: `#include <iostream>
  
  int main() {
      std::cout << "Hello, C++!" << std::endl;
      return 0;
  }`,
    csharp: `using System;
  
  class Program {
      static void Main(string[] args) {
          Console.WriteLine("Hello, C#!");
      }
  }`,
  };  
  
  constructor() {    
    this.updateEditorOptions();
  }
 
  updateEditorOptions() {
    this.editorOptions = { theme: this.selectedTheme, language: this.selectedLanguage };
    this.code = this.defaultCode[this.selectedLanguage];
  }
}
