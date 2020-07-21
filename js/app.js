import Vue from 'vue';
import education from './../data/education.json';
import projects from './../data/projects.json';
import workExperience from './../data/work_experience.json';
//import '@fortawesome/fontawesome-free/css/brands.css';
//import '@fortawesome/fontawesome-free/css/solid.css';
//import '@fortawesome/fontawesome-free/css/fontawesome.css';
//import '@fortawesome/fontawesome-free/svgs/brands'
import './../css/style.css';

const removeNoPreloadTransitionClasses = () => {
  const npt = "no-preload-transition";
  const elements = document.getElementsByClassName(npt);
  Array.from(elements).forEach((e) => e.classList.remove(npt));
};

const app = new Vue({
  el: "#app",
  data: {
    education: null,
    workExperience: null,
    projects: null,
  },
  created() {
      this.education = education;
      this.workExperience = workExperience;
      this.projects = projects;
  },
});
window.onload = () => removeNoPreloadTransitionClasses();
