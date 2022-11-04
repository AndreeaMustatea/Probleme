public class Complex{
    public double parteaReala;
    public double parteaImaginara;
    Complex(){
    }
    Complex(double x,double y){
        parteaReala=x;
        parteaImaginara=y;
    }
    public void afiseaza(){
        System.out.println(parteaReala+ "+i"+ parteaImaginara);
    }
    public Complex adauga(Complex y){
return new Complex(parteaReala=parteaReala+y.parteaReala,parteaImaginara=parteaImaginara+y.parteaImaginara);
    }
    public Complex scade(Complex y){
        return new Complex(parteaReala=parteaReala-y.parteaReala,parteaImaginara=parteaImaginara-y.parteaImaginara);
    }
    
}
