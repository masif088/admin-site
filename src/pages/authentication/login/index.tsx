import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import { Facebook, Linkedin, Twitter,AtSign,Eye,EyeOff } from "react-feather";
import { Button, FormGroup, Input, Label } from "reactstrap";
import {
  CreateAccount,
  DoNotAccount,
  EmailAddress,
  EnterEmailPasswordLogin,
  FacebookHeading,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
  TwitterHeading,
  linkedInHeading,
  GoogleChartHeading, GoogleHeading
} from "utils/Constant";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CommonLogo from "./CommonLogo";
import {auth, db} from "@/firebase/Firebase"
import {signInWithEmailAndPassword, UserCredential} from "@firebase/auth";
import {collection, doc, getDoc} from "@firebase/firestore";
import {forEach} from "lodash-es";

const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const router = useRouter();
  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth,email,password).then( async (user:UserCredential)=>{

      Cookies.set("token", user.user.uid,{expires:7});

      const queryUser = doc(db,"users",user.user.uid)
      const  userRef = await getDoc(queryUser)

      const data =userRef.data()
      if(typeof data != 'undefined'){
        if (typeof data["layout_preference"] == "object" ){
          const layouts = data["layout_preference"]
          for (const layoutsKey in layouts) {
            Cookies.set(layoutsKey, layouts[layoutsKey]);
          }
        }
      }
      router.push("/dashboard");
      toast.success("Login successful");
    }).catch((error)=>{
      toast.error(error.message);
    })
  };

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <CommonLogo />
              </div>
              <div className="login-main">
                <form className="theme-form" onSubmit={formSubmitHandle}>
                  <h4>{SignInAccount}</h4>
                  <p>{EnterEmailPasswordLogin}</p>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input type="email" required placeholder="---@---.com" value={email} name="email" onChange={handleUserValue} />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input type={showPassWord ? "text" : "password"} placeholder="*********" onChange={handleUserValue} value={password} name="password" />
                      <div className="show-hide">
                        <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                        {/*{!showPassWord?<Eye onClick={() => setShowPassWord(!showPassWord)} className='txt-eye' style={{ width:20,height:20}} />:<EyeOff onClick={() => setShowPassWord(!showPassWord)} className="txt-eye" style={{ width:20,height:20}} />}*/}
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className="mb-0 form-group">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <Link className="link" href="/pages/authentication/forget-pwd">
                      {ForgotPassword}
                    </Link>
                    <div className="text-end mt-3">
                      <Button color="primary" className="btn-block w-100" type="submit">
                        {SignIn}
                      </Button>
                    </div>
                  </FormGroup>
                  {/*<h6 className="text-muted mt-4 or">{SignInWith}</h6>*/}
                  {/*<div className="social mt-4">*/}
                  {/*  <div className="btn-showcase">*/}
                  {/*    <a className="btn btn-light" href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">*/}
                  {/*      <Linkedin className="txt-linkedin" /> {linkedInHeading}*/}
                  {/*    </a>*/}
                  {/*    <a className="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank" rel="noreferrer">*/}
                  {/*      <Twitter className="txt-twitter" />*/}
                  {/*      {TwitterHeading}*/}
                  {/*    </a>*/}
                  {/*    <a className="btn btn-light" href="https://www.facebook.com/" target="_blank" rel="noreferrer">*/}
                  {/*      <Facebook className="txt-fb" />*/}
                  {/*      {GoogleHeading}*/}
                  {/*    </a>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<p className="mt-4 mb-0 text-center">*/}
                  {/*  {DoNotAccount}*/}
                  {/*  <Link className="ms-2" href="/pages/authentication/register-simple">*/}
                  {/*    {CreateAccount}*/}
                  {/*  </Link>*/}
                  {/*</p>*/}
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
