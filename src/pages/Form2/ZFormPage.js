import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZCourseForm from '../../components/form2/ZCourseForm';
import ZStudentForm from '../../components/form2/ZStudentForm';
import ZFooter from '../../components/layout/ZFooter';
import './ZFormsPage.css';

const ZFormsPage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-form'>
        <h2>Add a new course to the course list</h2>
        <ZCourseForm />
        <h2>Add a new student to the student list</h2>
        <ZStudentForm />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZFormsPage;
