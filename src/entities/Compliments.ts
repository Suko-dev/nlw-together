import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Tag } from "./tags";
import { User } from "./user";

@Entity("compliments")
export class Compliment {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User)
    @JoinColumn()
    sender: User;

    @ManyToOne(() => User)
    @JoinColumn()
    reciever: User;

    @ManyToOne(() => Tag)
    @JoinColumn()
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
