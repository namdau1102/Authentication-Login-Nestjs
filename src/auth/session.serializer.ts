import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";


@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, { id: user })
  }
  deserializeUser(payload: any, done: (err: Error, playload: string) => void): any {
    done(null, payload)
  }
}

