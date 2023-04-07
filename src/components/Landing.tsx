import { HOME_ROUTE, TRY_AGAIN_LATER_MSG } from "constant/CommonConstants";
import React, {useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components"
import { StatusModal } from "./StatusModal";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "util/apiUtil";
import { Link } from "react-router-dom";