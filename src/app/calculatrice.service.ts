import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatriceService {

  /**
   * Addition de deux nombres
   * @param n1 {number} nombre 1
   * @param n2 {number} nombre 2
   * @returns {number} addition
   */
  addition(n1: number, n2: number): number
  {
    return n1 + n2;
  }

  /**
   * Soustraction de deux nombres
   * @param n1 {number} nombre 1
   * @param n2 {number} nombre 2
   * @returns {number} soustraction
   */
   soustraction(n1: number, n2: number): number
   {
     return n1 - n2;
   }

   /**
   * Multiplication de deux nombres
   * @param n1 {number} nombre 1
   * @param n2 {number} nombre 2
   * @returns {number} multiplication
   */
  multiplication(n1: number, n2: number): number
  {
    return n1 * n2;
  }

  /**
   * Division de deux nombres
   * @param n1 {number} nombre 1
   * @param n2 {number} nombre 2
   * @returns {number} division
   */
   division(n1: number, n2: number): number
   {
     return n1 / n2;
   }


  constructor() { }
}
