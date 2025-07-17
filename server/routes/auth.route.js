import { Router } from "express";
import { loginHandler, registerHandler } from "../controller/auth.controller";

const router = Router();

router.get("/register",registerHandler);
router.post("/login", loginHandler);