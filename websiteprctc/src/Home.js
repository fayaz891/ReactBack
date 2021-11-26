import React from 'react'
import girlice from "./images/eee.png"
import {Button} from "@material-ui/core"
import Section2 from './Section2';
import { Sdata } from './Section2';


function Home() {
    return (
      <div>
        <div className="container-fluid header">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="d-flex justify-content-center flex-column"
                    style={{ height: "80vh" }}
                  >
                    <h1>GET THE BEST ICECREAM QUALITY</h1>
                    <p>Here you get any type of icrcream with low price</p>

                    <Button
                      variant="contained"
                      size="large"
                      style={{
                        color: "cyan",
                        backgroundColor: "darkorchid",
                        width: "fit-content",
                      }}
                    >
                      Primary
                    </Button>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div>
                    <img
                      src={girlice}
                      alt="girlice"
                      style={{ backgroundSize: "fill" }}
                      width="70%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-white h-50">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-sm-4">
                  <Section2 title={Sdata[0].title} />
                </div>
                <div className="col-sm-4">
                  <Section2 title={Sdata[1].title} />
                </div>
                <div className="col-sm-4">
                  <Section2 title={Sdata[2].title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
