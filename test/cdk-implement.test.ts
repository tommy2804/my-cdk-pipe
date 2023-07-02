import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkImplement from '../lib/cdk-implement-stack';

test('My first stack Created', () => {
  const app = new cdk.App();
  const stack = new CdkImplement.CdkImplementStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    functionName: 'first-cdk-lambda',
    runtime: 'nodejs16.x',
    handler: 'index.handler',
    memorySize: 128,
  });
});
