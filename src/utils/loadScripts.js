// import select from "./select";

export const loadScripts = () => {
  const script = document.createElement("script");
  const script2 = document.createElement("script");
  const script3 = document.createElement("script");
  const script4 = document.createElement("script");
  const script5 = document.createElement("script");
  const script6 = document.createElement("script");
  const script7 = document.createElement("script");

  // Puede que solo san necesarios esos 2 scripts

  script.src = "/vendor/global/global.min.js";
  script.async = false;
  document.body.appendChild(script);
  script2.src = "/vendor/bootstrap-select/dist/js/bootstrap-select.min.js";
  script2.async = false;
  document.body.appendChild(script2);
  script3.src = "/js/custom.min.js";
  script3.async = false;
  document.body.appendChild(script3);
  // script11.src = "/js/dlabnav-init.js";
  // script11.async = false;
  // document.body.appendChild(script11);

  script6.src = "/vendor/peity/jquery.peity.min.js";
  script6.async = false;
  document.body.appendChild(script6);
  script7.src = "/js/dashboard/dashboard-2.js ";
  script7.async = false;
  document.body.appendChild(script7);
  //esto es para animar los iconitos
  // script8.src = "/vendor/svganimation/vivus.min.js";
  // script8.async = false;
  // document.body.appendChild(script8);
  // script9.src = "/vendor/svganimation/svg.animation.js";
  // script9.async = false;
  // document.body.appendChild(script9);
  // script10.src = "/js/styleSwitcher.js";
  // script10.async = false;
  // document.body.appendChild(script10);
  // script12.src = "/js/plugins-init/datatables.init.js";
  // script12.async = false;
  // document.body.appendChild(script12);
};
