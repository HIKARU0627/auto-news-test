import React, { useReducer } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import CourseNavbarRollEn from "./CourseNavbarRollEn";
import DepartmentNavbarRollEn from "./DepartmentNavbarRollEn";
import FarewellNavbarRoll from "./FarewellNavbarRoll";

const courseReducer = (
  {
    /* eslint-disable */
    courseList,
    courseCategory,
    courseDepartment,
    courseFarewell,
    /* eslint-enable */
  },
  action
) => {
  switch (action) {
    case "list":
      return {
        courseList: true,
        courseCategory: false,
        courseDepartment: false,
        courseFarewell: false,
      };
    case "category":
      return {
        courseList: false,
        courseCategory: true,
        courseDepartment: false,
        courseFarewell: false,
      };
    case "department":
      return {
        courseList: false,
        courseCategory: false,
        courseDepartment: true,
        courseFarewell: false,
      };
    case "farewell":
      return {
        courseList: false,
        courseCategory: false,
        courseDepartment: false,
        courseFarewell: true,
      };
    default:
      return {
        courseList: true,
        courseCategory: false,
        courseDepartment: false,
        courseFarewell: false,
      };
  }
};

const NavbarCoursePulldownEn = () => {
  const [courseState, courseDispatch] = useReducer(courseReducer, {
    courseList: true,
    courseCategory: false,
    courseDepartment: false,
    courseFarewell: false,
  });

  return (
    <PulldownCourse className="container">
      <div className="columns">
        <div className="column is-one-fifth">
          <PulldownItemList
            className={`${courseState.courseList ? "on-course" : "off-course"}`}
            onClick={() => courseDispatch("list")}
          >
            <span>courses</span>
          </PulldownItemList>
          {/* <PulldownItemList
            className={`${
              courseState.courseCategory ? "on-course" : "off-course"
            }`}
            onClick={() => courseDispatch("category")}
          >
            <span>カテゴリから探す</span>
          </PulldownItemList> */}
          <PulldownItemList
            className={`${
              courseState.courseDepartment ? "on-course" : "off-course"
            }`}
            onClick={() => courseDispatch("department")}
          >
            <span>Search by Department</span>
          </PulldownItemList>
          <Link to="/en/search">
            <PulldownItemList>Search by Keyword</PulldownItemList>
          </Link>
          <Link to="/en/tags">
            <PulldownItemList>Search by Tags</PulldownItemList>
          </Link>
        </div>

        <div className="column">
          <div
            className={`${courseState.courseList ? "is-course" : "not-course"}`}
          >
            <CourseNavbarRollEn />
            <ButtonContainer>
              <Link to="/en/courses">
                <button className="button is-dark is-fullwidth">
                  View All...
                </button>
              </Link>
            </ButtonContainer>
          </div>

          {/* <div
            className={`${
              courseState.courseCategory ? "is-course" : "not-course"
            }`}
          >
            <CategoryNavbarRoll />
            <ButtonContainer>
              <Link to="/categories">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link>
            </ButtonContainer>
          </div> */}

          <div
            className={`${
              courseState.courseDepartment ? "is-course" : "not-course"
            }`}
          >
            <DepartmentNavbarRollEn />
            <ButtonContainer>
              <Link to="/en/department">
                <button className="button is-dark is-fullwidth">
                  View All...
                </button>
              </Link>
            </ButtonContainer>
          </div>

          <div
            className={`${
              courseState.courseFarewell ? "is-course" : "not-course"
            }`}
          >
            <FarewellNavbarRoll />
            <ButtonContainer>
              <Link to="/farewell">
                <button className="button is-dark is-fullwidth">
                  View All...
                </button>
              </Link>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </PulldownCourse>
  );
};

const PulldownCourse = styled.div`
  div.is-course {
    display: block;
  }
  div.is-course > div {
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  div.not-course {
    display: none;
  }
`;

const PulldownItemList = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  color: #8c8c8c;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  font-size: 0.875rem;
  &.on-course {
    color: #ffffff;
  }
  &.off-course {
    color: #8c8c8c;
  }
  &:hover {
    color: #ffffff;
  }
  span::before {
    content: ">";
    position: absolute;
    right: 0;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export default NavbarCoursePulldownEn;
