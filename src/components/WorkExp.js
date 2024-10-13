// src/components/WorkExp.js

import React from 'react';
import './WorkExp.css'; 

const WorkExp = () => {
  return (
  <section id="work">

  <article class="work-experience">
    <h3>Finedo.cn</h3>
    <p>
      During my time at <strong>Finedo.cn</strong> as a <strong>Data Scientist Intern</strong>, I worked on some pretty cool projects, including collaborating with China Mobile to deliver AI-powered solutions. I helped build a BERT-based model to categorize user inquiries, handling a huge dataset with over 120,000 entries. We also implemented a system that automated receipt processing using deep learning (YOLO v3), making workflows much more efficient. Along the way, I learned a lot about model evaluation techniques like F1-Score, Recall, and MSE, which helped us improve the overall performance of our models.
    </p>
  </article>

  <article class="work-experience">
    <h3>Ontario Institute for Studies in Education (OISE)</h3>
    <p>
      At <strong>OISE</strong>, I worked as a <strong>Full-stack Developer Intern</strong> on an exciting project called <strong>BalanceAI</strong>. I helped build a secure user registration system, complete with frontend validation and password encryption, which was my first deep dive into full-stack development. I also created real-time reporting tools for student progress and worked on dynamic interfaces for various cognitive tasks for the <strong>Talk2Me Jr.</strong> project, allowing students to engage with interactive tasks like story recall and word recognition.
    </p>
  </article>
</section>

  );
};

export default WorkExp;
