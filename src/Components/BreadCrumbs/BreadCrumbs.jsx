import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome CSS

function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // مصفوفة تحتوي على المسارات الخاصة التي تحتاج إلى تعديل
  const specialPaths = ["CourseSingle", "BlogSingle"]; // يمكنك إضافة مسارات أخرى حسب الحاجة

  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item style={{display : 'flex'}}  linkAs={Link} linkProps={{ to: "/" }}>
          Homepage
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const isSpecialPath = specialPaths.includes(value) && index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return index + 1 === pathnames.length ? (
            <Breadcrumb.Item active key={to}>
              {decodeURIComponent(value)}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={to}>
              {decodeURIComponent(value)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumbs;
