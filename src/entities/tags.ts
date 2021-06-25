import { Exclude, Expose } from "class-transformer";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tags")
export class Tag {
    @PrimaryColumn()
    readonly id: string;

    @Exclude()
    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({ name: "name" })
    customName(): string {
        return `#${this.name}`;
    }

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
