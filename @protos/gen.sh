grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:./dist \
--grpc_out=grpc_js:./dist \
--ts_out=grpc_js:./dist \
-I ./src ./src/*.proto\

ls dist/ | grep "d.ts" | while read -r line ; do
    filename=${line::${#line}-5}
    echo "export * from './$filename'" >> dist/index.ts
done

tsc dist/index.ts --declaration

# rm dist/index.ts
