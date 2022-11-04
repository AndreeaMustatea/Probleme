
public class Cerc{
    private double r;
       Cerc (double r){
           this.r= r;
       }
       Cerc() {
           this(5);
       }
    public double getr() {return r;}
    public void setr(double val) { r=val;}
    
    public double getArie(){
        return Math.PI*r*r;
    }
    public double getCircumferinta(){
        return 2*Math.PI*r;
    }
    
    public void afiseaza(){
        System.out.println("Raza");
    }
}
