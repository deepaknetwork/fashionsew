import React from "react";
import Footer from "../component/footer";
import { Addmen,Addwomen,Addkids } from "../component/add";

export default function Home()
{
  
    return <section  id="h">
              
              <section id="h1">
                  <div><h1>Welcome to Fasion Sew</h1></div>
              </section>
              <section id="cap">
              <h3>"Where style meets craftsmanship, and dreams </h3>
            <h3>find their perfect fit."</h3>  </section>



              

           <Addmen />
           <Addwomen />
           <Addkids />
           <Footer />


        </section>
}