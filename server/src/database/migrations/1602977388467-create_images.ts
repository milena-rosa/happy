import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class createImages1602977388467 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'path',
            type: 'varchar'
          },
          {
            name: 'orphanage_id',
            type: 'integer'
          },
          {
            name: 'created_at',
            type: 'date'
          },
          {
            name: 'updated_at',
            type: 'date'
          }
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }
}
