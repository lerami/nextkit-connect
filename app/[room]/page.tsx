'use client'

import { Room } from "@/components/room";
import { UsernameForm } from "@/components/username-form";
import { useSearchParams } from 'next/navigation'


export default function Page({
    params
  }: {
    params: {
      room: string
    }
  }) {
  const searchParams = useSearchParams()
  const username = searchParams.get('username')
  const room = params.room || "quickstart-room";
  
  return (
    !username ? <div className="h-full grid place-content-center"><UsernameForm room={room}/></div> : <Room room={room} user={username} />
  )
  }

