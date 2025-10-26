// 

import React from 'react';

const projects = [
  { id:1, title:'Portfolio Website', desc:'A responsive personal portfolio built with React and Bootstrap.', img:'https://static.vecteezy.com/system/resources/previews/020/815/881/non_2x/portfolio-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg' },
  { id:2, title:'News App', desc:'A news aggregator built using public APIs and React.', img:'https://cdn-icons-png.flaticon.com/512/1759/1759492.png' }
];

export default function Projects(){
  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Projects</h2>
      <div className="row">
        {projects.map(p=>(
          <div className="col-md-6 mb-4" key={p.id}>
            <div className="card h-100 shadow-sm">
              <img src={p.img} className="card-img-top" alt={p.title} loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
