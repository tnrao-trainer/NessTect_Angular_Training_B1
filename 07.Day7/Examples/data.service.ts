import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/studentModel';
 
@Injectable({
  providedIn : 'root'
})
export class DataService {

  baseUrl  = "http://localhost:3000/students/";

  constructor(private httpClient:HttpClient) {
     
   }

   getAllStudents():Observable<any>
   {
      return this.httpClient.get(this.baseUrl);
   }

   getStudentById(id:number):Observable<any>
   {
      return this.httpClient.get(this.baseUrl + id);
   }

   addStudent(studentObj:any):Observable<any>
   {
      return this.httpClient.post(this.baseUrl, studentObj);
   }

   updateStudent(studentObj:any):Observable<any>
   {
      return this.httpClient.put(this.baseUrl + studentObj.studentId, studentObj);
   }

   deleteStudent(id:number):Observable<any>
   {
      return this.httpClient.delete(this.baseUrl + id);
   }

//-----------------------------------------------------------
   // Getting Typed from http methods
   getTypedData() : Observable<Student[]>
   {
      //   return this.httpClient.get<Student[]>("http://localhost:3200");
      return this.httpClient.get<Student[]>(this.baseUrl);
   }

   // Send Http Url Parameters through http methods
   getStudentsByCity() : Observable<Student[]>
   {
      let httpParams:HttpParams = new HttpParams();
      httpParams =  httpParams.set("city","Hyd");
      console.log(httpParams.toString());
      return this.httpClient.get<Student[]>(this.baseUrl, {params : httpParams});
   } 
     
    // we need to inject/add the security token in http request
    getStudentsWithToken() : Observable<Student[]>
    {
      const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
      const header = { 'Authorization' : `Bearer ${hardcodedToken}`};
      return this.httpClient.get<Student[]>(this.baseUrl, { headers: header});
    } 


   
 

}
