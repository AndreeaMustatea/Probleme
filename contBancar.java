public class contBancar{
    String numarCont;
    double a,sumaCont,e;
       contBancar(String numarCont,double sumaCont,double a,double e){
       this.numarCont= numarCont;
       this.sumaCont= sumaCont;
       this.a=a;
       this.e=e;
       }
       contBancar(){ 
       }
       public double adaugareCont(){
           return sumaCont=sumaCont+e;
       }
       public double extragereCont(){
           return sumaCont=sumaCont-a;
       }
       public void afiseaza(){
           System.out.println("Numar cont "+numarCont);
           System.out.println("Suma cont : "+sumaCont);
       }
       public void afiseazaE(){
           if(a>sumaCont){
               System.out.println("Nu se poate realiza extragerea ");
           }else
           {System.out.println("Numar cont "+numarCont);
           System.out.println("Suma cont : "+extragereCont());}
       }
       public void afiseazaA(){
           System.out.println("Numar cont "+numarCont);
           System.out.println("Suma cont : "+adaugareCont());
       }
}
