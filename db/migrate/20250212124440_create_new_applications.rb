class CreateNewApplications < ActiveRecord::Migration[8.0]
  def change
    create_table :new_applications do |t|
      t.jsonb :data, default: {}

      t.timestamps
    end
  end
end
