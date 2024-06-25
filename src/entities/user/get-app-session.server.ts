import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/entities/user/next-auth-config";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
