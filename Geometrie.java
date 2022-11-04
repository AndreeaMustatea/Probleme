import java.util.Scanner;

public class Geometrie{
    public static int n;
    public static int c;
    public static int i;
    public static int xM;
    public static int yM;
    public static int xA;
    public static int xB;
    public static int yB;
    public static int yA;
    public static int x[];
    public static int y[];
    
    public static void coordX(int n)
    {
        x=new int[n];
    }
    
    public static void coordY(int n)
    {
        y=new int[n];
    }
    
    public static int calcDet(int xA,int yA,int xB,int yB,int xM,int yM)
    {
        return (xA*yB)+(xM*yA)+(xB*yM)-(xM*yB)-(xA*yM)-(xB*yA);
     }
    
    public static void verif()
    {
        for (i=0;i<n;i++)
        {
            
            if((xM-x[i])*(xM-x[i+1])<=0 && (y[i]==y[i+1]) && y[i]==yM)
            {
                System.out.println("M se afla pe frontiera");
                c=-1;
                break;
            }
            if (y[i]>y[i+1])
            {
                xA=x[i];
                yA=y[i];
                xB=x[i+1];
                yB=y[i+1];
            }
            if(y[i]<y[i+1])
            {
                xA=x[i+1];
                yB=y[i+1];
                xB=x[i];
                yB=y[i];
            }
            if(y[i]!=y[i+1]&& (yM>yB&&yM<yA))
                    {
                      if (calcDet(xA,yA,xB,yB,xM,yM)>0)
                      {
                          c++;
                      }
                      if (calcDet(xA,yA,xB,yB,xM,yM)==0)
                      {
                         System.out.println("M se afla pe frontiera");
                         c=-1;
                         break;
                      }
                    }
           if(y[i]!=y[i+1] && yM>=yA)
           {
               if(xM<xA)
               {
                   c++;
               }
           }
        }
    }
        
   public static void main (String[] args)
        {
            Scanner read = new Scanner(System.in);
            System.out.print("Introduceti numarul varfurilor: ");
        n = read.nextInt();
        coordX(n+1);
        coordY(n+1);
        for(i=0;i<n;i++)
        {
            x[i]= read.nextInt();
            y[i]= read.nextInt();
        }
        x[i]=x[0];
        y[i]=y[0];
        if(n==3)
            System.out.println("Varfurile triunghiului sunt: ");
        else
        {System.out.println("Varfurile poligonului sunt: ");}
        for(i=0;i<n;i++)
        {
            System.out.println("("+x[i]+","+y[i]+")");
        }
        xM= read.nextInt();
        yM= read.nextInt();
        c=0;
        verif();
        if(c>=0)
        {
            if(c%2==0)
            {
                System.out.println("M se alfa in afara");
            }
            else
                System.out.println("M se alfa in interior");
        }
        }
        
    }

   