import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('image')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  card_id: string;

  @Column()
  url: string;

  @Column()
  type: string;
}
