import { Ctx } from "blitz"

export default async function testMutation(_input: any, { session }: Ctx): Promise<null> {
  console.log("session:", session)

  if (!session) throw new Error("no session :(")

  return null
}
