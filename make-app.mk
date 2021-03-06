development-setup-env:
	ansible-playbook ansible/development.yml -i ansible/development -vv

app-test:
	docker-compose -f services/app/docker-compose.test.yml run sut

app:
	docker-compose up

app-build:
	docker-compose build

app-bash:
	docker-compose run app bash

app-setup: app-build
	docker-compose run app npm install
	docker-compose run app npm run sequelize db:migrate
	ansible-playbook ansible/development.yml -i ansible/development -vv
