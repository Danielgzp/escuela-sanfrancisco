export const loadScripts = () => {
  const script = document.createElement("script");
  const script2 = document.createElement("script");
  const script3 = document.createElement("script");
  const script4 = document.createElement("script");
  const script5 = document.createElement("script");
  const script6 = document.createElement("script");
  const script7 = document.createElement("script");
  const script8 = document.createElement("script");
  const script9 = document.createElement("script");
  const script10 = document.createElement("script");

  script.src = "/vendor/global/global.min.js";
  script.async = false;
  document.body.appendChild(script);
  script2.src = "/vendor/bootstrap-select/dist/js/bootstrap-select.min.js";
  script2.async = false;
  document.body.appendChild(script2);
  script3.src = "/js/custom.min.js";
  script3.async = false;
  document.body.appendChild(script3);
  script4.src = "/vendor/raphael/raphael.min.js";
  script4.async = false;
  document.body.appendChild(script4);
  script5.src = "/vendor/morris/morris.min.js";
  script5.async = false;
  document.body.appendChild(script5);
  
  script6.src = "/vendor/peity/jquery.peity.min.js";
  script6.async = false;
  document.body.appendChild(script6);
  script7.src = "/js/dashboard/dashboard-2.js ";
  script7.async = false;
  document.body.appendChild(script7);
  script8.src = "/vendor/svganimation/vivus.min.js";
  script8.async = false;
  document.body.appendChild(script8);
  script9.src = "/vendor/svganimation/svg.animation.js";
  script9.async = false;
  document.body.appendChild(script9);
  // script10.src = "/js/styleSwitcher.js";
  // script10.async = false;
  // document.body.appendChild(script10);
};
