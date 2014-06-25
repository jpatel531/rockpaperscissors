require 'sinatra'

set :views, Proc.new { File.join(root, "lib", "views") }
set :public_folder, Proc.new {File.join(root, "lib", "public_folder")}

get '/' do 
	erb :index
end

