
#import "String-Util.h"

@implementation NSString (Util)

- (BOOL) isURL {
    if ([self hasPrefix:@"http://"]) {
        return YES;
    } else {
        return NO;
    }
}


NSString* string1 = @"http://pixar.com";
NSString* string2 = @"Pixar";

if ([string1 isURL]) {
    NSLog(@"string1 is a URL");
} else {
    NSLog(@"string1 is not a URL");
}

if ([string2 isURL]) {
    NSLog(@"string2 is a URL");
} else {
    NSLog(@"string2 is not a URL");
}



@end
