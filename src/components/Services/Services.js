import React from "react";
import "./Services.css";
import ServiceItem from "../ServiceItem/ServiceItem";

const Services = () => {

    const packs=[
        {
            Title:"Web Pack 1",
            Price:5000,
            Features:[
                {
                    ftitle:"One page"
                }
            ]
        },
        {
            Title:"Web Pack 2",
            Price:10000,
            Features:[
                {
                    ftitle:"Three page",
                },
                {
                    ftitle:"Landing,Contact,About"
                }
            ]
        },
        {
            Title:"Mobile Pack 1",
            Price:5000,
            Features:[
                {
                    ftitle:"One page",
                }
            ]
        },
        {
            Title:"Mobile Pack 2",
            Price:10000,
            Features:[
                {
                    ftitle:"Three page",
                },
                {
                    ftitle:"Landing,Contact,About"
                }
            ]
        },
        {
            Title:"Mobile Pack 2",
            Price:10000,
            Features:[
                {
                    ftitle:"Three page",
                },
                {
                    ftitle:"Landing,Contact,About"
                }
            ]
        }
    ]

  return (
    <section id="services">
      <span className="projectTItle">Services</span>
      <div className="serviceItemContainer">
        {
            packs.map((value, index, array) => {
                return(
                    <ServiceItem pack={value}/>
                )
            })
        }
        
      </div>
    </section>
  );
};

export default Services;
