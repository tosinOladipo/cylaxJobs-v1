"use client";
import React, { useEffect } from "react";
import Logo from "../_components/Logo";
import Nav from "../_components/Nav";
import Container from "@/components/container";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "@/utils/actions/users/actions";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../store/slice/userSlice";
import { LogOut } from "lucide-react";
import { RootState } from '@/app/store/store';

function Header() {

  const { user } = useSelector((state : RootState) => state.user);

  const dispatch = useDispatch();

  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUserInfo(),
  });

  useEffect(() => {
    if (data) {
      const {id, firstname, lastname, email, companyId} = data
      dispatch(setUser({id, firstname, lastname, email, companyId}));
    }
  }, [data, dispatch]);

  return (
    <section className="flex flex-col w-full fixed top-0 z-10">
      <header className="bg-white w-full py-8 shadow-md">
        <Container>
          <section className="flex justify-between">
            <div className="flex lg:gap-40">
              <Logo />
              <Nav />
            </div>
            <div className="w-auto flex gap-3">
              <SignedIn>
                <div className="flex gap-2">
                  <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <SignOutButton>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => dispatch(logout())}
                    >
                      <LogOut />
                    </Button>
                  </SignOutButton>
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" className="cursor-pointer">
                    Login / Register
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </section>
        </Container>
      </header>
    </section>
  );
}

export default Header;
