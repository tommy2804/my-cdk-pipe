import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkImplement from '../lib/cdk-implement-stack';

test('My first stack Created', () => {
  const app = new cdk.App();
  const stack = new CdkImplement.CdkImplementStack(app, 'myTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    FunctionName: 'first-cdk-lambda',
    Runtime: 'nodejs16.x',
    Handler: 'index.handler',
    MemorySize: 128,
  });
});
