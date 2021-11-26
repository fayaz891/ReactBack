import React from 'react'

const Sdata = [
    {title:"stop wasting money and efforts"},
    {title:"Attract great clients who love you"},
    {title:"grow the business of your dream"}
];
function Section2(props) {
    return (
      <div>
        <section>
           <div className="card mt-5">
        <div className="card-body h-25">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
        </section>
      </div>
    );
}



export default Section2
export {Sdata}
