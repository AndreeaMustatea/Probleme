import javax.swing.*;
 public class Ecuatie{
     public static final double EPS=Math.pow(10,-5);
       
     public static double factorial(double z){
         double i;
          double factorial=1.0;
          for(i=2;i<=z;i++){
              factorial=factorial *i;
          }
          return factorial;
      }
      public static double suma(int x){
          double sum=1;
          int n = 1;
          while(Math.abs(Math.pow(x,n) / factorial(n)) > EPS)
          {
              sum= sum+Math.pow(x,n)/factorial(n);
              n++;
          }
          return sum;
      }
      public static void main(String[] args ){
          int x= Integer.parseInt(JOptionPane.showInputDialog("Calculati e la x"));
                  JOptionPane.showMessageDialog(null,"e la puterea "+ (int)x+ "este: "+ suma(x)+"\nfunctia implicita: "+Math.exp(x));
      }
 }
