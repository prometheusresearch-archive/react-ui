BIN           = ./node_modules/.bin
TESTS         = $(shell find ./src -path '**/__tests__/*-test.js')
SRC           = $(shell find ./src -name '*.js' -not -path '*/__tests__/*')
LIB           = $(SRC:./src/%=./lib/%)
NODE          = $(BIN)/babel-node $(BABEL_OPTIONS)
MOCHA_OPTIONS = -R dot
MOCHA         = $(BIN)/_mocha $(MOCHA_OPTIONS)
NYC_OPTIONS   = --all --require babel-core/register
NYC           = $(BIN)/nyc $(NYC_OPTIONS)

build::
	@$(MAKE) -j 8 $(LIB)

doctoc:
	@$(BIN)/doctoc --title '**Table of Contents**' ./README.md

changelog:
	@$(BIN)/conventional-changelog -p angular -i CHANGELOG.md -s -r 0

lint::
	@$(BIN)/eslint $(SRC)

storybook::
	@npm run storybook

check::
	@$(BIN)/flow

test::
	@$(BIN)/jest

report-cov::
	@$(BIN)/nyc report --reporter html

report-cov-coveralls::
	@$(BIN)/nyc report --reporter=text-lcov | $(BIN)/coveralls

ci::
	@$(BIN)/jest --watch

version-major version-minor version-patch: lint test build
	@npm version $(@:version-%=%)

publish:
	@git push --tags origin HEAD:master
	@npm publish --access public

clean:
	@rm -rf lib/

./lib/%.js: ./src/%.js
	@echo "Building $<"
	@mkdir -p $(@D)
	@$(BIN)/babel $(BABEL_OPTIONS) -o $@ $<
