#import <Cocoa/Cocoa.h>

@interface Photo:NSObject {
    NSString* caption;
    NSString* photographer;
}

@property (retain) NSString* caption;
@property (retain) NSString* photographer;

@end
