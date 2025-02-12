class FormsController < ApplicationController
  inertia_share do
    {user:
      {
        name: "Pasha",
        age: 37
      }
    }
  end

  def step1
    render inertia: "ApplicationForm/Step1", props: {test: "Test PROPS", lastCreatedApp: last_created_app}
  end

  def create_app
    redirect_to root_path, inertia: { test: "Test PROPS", lastCreatedApp: last_created_app }
  end

  def step2
    render inertia: "ApplicationForm/Step2"
  end

  private

  def last_created_app
    NewApplication.last
  end
end
