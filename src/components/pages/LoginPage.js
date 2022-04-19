import * as React from "react";
import "../sass/css/LoginPage.css";
import { pat } from '../component/path'
import { useForm } from "react-hook-form";
import { FiChevronLeft } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// check box\
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginPage() {
  const navigate = useNavigate();
  window.onload = function() {
    var checklogin = localStorage.getItem('checked')
    if(checklogin==='true'){
      navigate("/HomePage")
    }
  }
  //Khai báo hàm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  //Hàm đăng nhập
  const onSubmit = (data) => {
    if(data.userAccout.length===0){
      alert("Không được để trống tài khoản")
    }else if(data.passWord.length===0){
      alert("không được để trống mật khẩu")
    }else{
      axios.post("http://" + pat + "/login", data).then((response) => {
        console.log(response.data.success);
        if(response.data.success===true){
          if(checked===true){
                  console.log(data.userAccout);   
                  localStorage.setItem ('userAccout', data.userAccout);
                  localStorage.setItem('checked',checked);
                  console.log(localStorage);
                  navigate("/HomePage")
          }else{
            navigate("/HomePage")
          }
 
        }else{
          alert("Sai tài khoản hoặc mật khẩu !!!")
        }
      });
      
    }
  };

  return (
    <div className="container-LoginPage">
      <div className="contai-left-img">
        <img classNam="img-logo" src={require("../images/LogoApp.png")} />
      </div>
      <div className="contai-right-form">
        <div className="contai-form">
          <div className="content-form">
            <h1>Đăng nhập</h1>
          </div>
          <div className="form-imput">
            <div className="forms">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-acout form-ctn">
                  <input
                    className="form-input-accout ipt"
                    id="userAccout"
                    type="text"
                    placeholder=" "
                    {...register("userAccout", {
                      maxLength: 20,
                      required: true,
                    })}
                  />
                  {/* {errors?.userAccout?.type === "required" && (
                    <p className="validate-error">Tài khoản không được để trống</p>
                  )}
                  {errors?.userAccout?.type === "maxLength" && (
                    <p className="validate-error">Tài khoản phải lớn hơn 20 kí tự</p>
                  )} */}
                  <label for="userAccout" className="form-label-accout lbl">
                    Tài khoản
                  </label>
                </div>
                <div className="form-password form-ctn">
                  <input
                    className="form-input-password ipt"
                    id="passWord"
                    type="password"
                    placeholder=" "
                    {...register("passWord", {
                      required: true,
                      maxLength: 100,
                    })}
                  />

                  <label for="passWord" className="form-label-password lbl">
                    Mật khẩu
                  </label>
                </div>
                <div className="form-check-box">
                  <Checkbox
                    {...label}
                    checked={checked}
                     onChange={handleChange}
                    sx={{
                      color: "#ffff",
                      "&.Mui-checked": {
                        color: "#ffff",
                      },
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                    }}
                  />
                  <span>Lưu mật khẩu</span>
                </div>
                <button className="btn-login-default" type="submit">
                  <p className="hover-text-login">Đăng nhập</p>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="icon-backs">
          <Link to="/WecomePage">
            <IconContext.Provider
              value={{ color: "white", className: "icon-back" }}
            >
              <FiChevronLeft />
            </IconContext.Provider>
          </Link>
        </div>
        <footer>
          <ul>
            <li>
              {" "}
              <a href="#">Meta</a>
            </li>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              {" "}
              <a href="#">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#">Jobs</a>
            </li>
            <li>
              {" "}
              <a href="#">Help</a>
            </li>
            <li>
              {" "}
              <a href="#">API</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
export default LoginPage;
