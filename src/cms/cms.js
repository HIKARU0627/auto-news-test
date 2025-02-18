import CMS from "decap-cms-app";

import CoursePostPreview from "./preview-templates/CoursePostPreview";
import FarewellPreview from "./preview-templates/FarewellPagePreview";
import CourseEnPostPreview from "./preview-templates/CourseEnPostPreview";
import NewsPagePreview from "./preview-templates/NewsPagePreview";
import DepartmentPreview from "./preview-templates/DepartmentPreview";
import DepartmentEnPreview from "./preview-templates/DepartmentEnPreview";

CMS.registerPreviewTemplate("courses", CoursePostPreview);
CMS.registerPreviewTemplate("farewell", FarewellPreview);
CMS.registerPreviewTemplate("courses-en", CourseEnPostPreview);
CMS.registerPreviewTemplate("news", NewsPagePreview);
CMS.registerPreviewTemplate("department", DepartmentPreview);
CMS.registerPreviewTemplate("department-en", DepartmentEnPreview);
